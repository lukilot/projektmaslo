'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import styles from './Hero.module.css';

const frameCount = 192;

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, { mass: 0.1, stiffness: 100, damping: 20 });
    const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const scaleText = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);
    const opacityScroll = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    useEffect(() => {
        let isMobile = window.innerWidth < 768; // Initial check
        const loadedImages: HTMLImageElement[] = [];

        const loadImages = () => {
            const basePath = isMobile ? '/hero-sequence-mobile' : '/hero-sequence';
            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                img.src = `${basePath}/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
                img.onload = () => {
                    if (i === 1) {
                        const canvas = canvasRef.current;
                        if (canvas) draw(canvas, img);
                    }
                };
                loadedImages[i] = img;
            }
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();

        const handleResize = () => {
            const currentIsMobile = window.innerWidth < 768;
            if (currentIsMobile !== isMobile) {
                isMobile = currentIsMobile;
                setIsLoaded(false);
                loadImages(); // Reload if breakpoint changes
            }

            const canvas = canvasRef.current;
            const latest = smoothProgress.get();
            const animationProgress = Math.min(1, latest / 0.85);
            const frameIndex = Math.ceil(animationProgress * (frameCount - 1));
            const index = Math.max(1, Math.min(frameCount, frameIndex + 1));
            if (canvas && loadedImages[index] && loadedImages[index].complete) {
                draw(canvas, loadedImages[index]);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const draw = (canvas: HTMLCanvasElement, img: HTMLImageElement) => {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Object-fit: cover
        const ratio = Math.max(canvas.width / img.width, canvas.height / img.height);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    };

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        const canvas = canvasRef.current;
        if (!canvas || !isLoaded) return;

        // Finish animation at 85% of scroll
        const animationProgress = Math.min(1, latest / 0.85);
        const frameIndex = Math.ceil(animationProgress * (frameCount - 1));
        const fileIndex = frameIndex + 1;
        const index = Math.max(1, Math.min(frameCount, fileIndex));

        const img = images[index];
        if (img && img.complete && img.naturalWidth > 0) {
            draw(canvas, img);
        }
    });

    return (
        <div ref={containerRef} className={styles.container}>
            <div className={styles.sticky}>
                <canvas ref={canvasRef} className={styles.canvas} />
                <motion.div
                    className={styles.overlay}
                    style={{ opacity: opacityText, scale: scaleText }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <h1 className={styles.slogan}>MASŁO.<br /> Z MASŁEM.<br /> NA MAŚLE.</h1>
                </motion.div>

                <motion.div
                    className={styles.scrollIndicator}
                    style={{ opacity: opacityScroll }}
                >
                    <span className={styles.scrollText}>Przewiń, aby odkryć</span>
                    <div className={styles.scrollIcon}>
                        <motion.div
                            className={styles.scrollDot}
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
