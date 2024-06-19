'use client';
import React, { useRef, useEffect } from 'react';

interface Circle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  img: HTMLImageElement;
  mass: number;
}

const CircleAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const imageSources = [
    '/html.webp',
    '/css.webp',
    '/js.webp',
    '/ts.webp',
    '/firebase.webp',
    '/git.webp',
    '/react.webp',
    '/next.webp',
    '/redux.webp',
    '/node.webp',
    '/aws.webp',
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    let circles: Circle[] = [];

    // 아이콘 속도 조절
    const speed = 1.5;

    const createCircles = () => {
      const newCircles: Circle[] = [];
      const container = containerRef.current;
      const radius = container && container.clientWidth <= 600 ? 25 : 25;

      for (let i = 0; i < imageSources.length; i++) {
        const img = new Image();
        img.src = imageSources[i % imageSources.length];

        newCircles.push({
          x: 50 + (i % Math.floor(canvas.width / 100)) * 100,
          y: 50 + Math.floor(i / Math.floor(canvas.width / 100)) * 100,
          dx: (Math.random() - 0.5) * speed,
          dy: (Math.random() - 0.5) * speed,
          radius,
          img,
          mass: 1,
        });
      }
      return newCircles;
    };

    const resizeCanvas = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(() => {
        const container = containerRef.current;
        if (container && canvas) {
          canvas.width = container.clientWidth;
          canvas.height = 500;
          // 캔버스 크기 변경 시 아이콘 재생성
          circles = createCircles();
        }
      }, 500);
    };

    // 초기 캔버스 크기 설정
    resizeCanvas();

    // 창 크기 변경 시 캔버스 크기 조정
    window.addEventListener('resize', resizeCanvas);

    const detectCollision = (circle1: Circle, circle2: Circle) => {
      const dx = circle1.x - circle2.x;
      const dy = circle1.y - circle2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < circle1.radius + circle2.radius;
    };

    const resolveCollision = (circle1: Circle, circle2: Circle) => {
      const dx = circle1.x - circle2.x;
      const dy = circle1.y - circle2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const minDistance = circle1.radius + circle2.radius;
      const overlap = minDistance - distance;

      if (overlap > 0) {
        const angle = Math.atan2(dy, dx);
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);

        const vx1 = circle1.dx * cos + circle1.dy * sin;
        const vy1 = circle1.dy * cos - circle1.dx * sin;
        const vx2 = circle2.dx * cos + circle2.dy * sin;
        const vy2 = circle2.dy * cos - circle2.dx * sin;

        const finalVx1 =
          ((circle1.mass - circle2.mass) * vx1 + 2 * circle2.mass * vx2) /
          (circle1.mass + circle2.mass);
        const finalVx2 =
          ((circle2.mass - circle1.mass) * vx2 + 2 * circle1.mass * vx1) /
          (circle1.mass + circle2.mass);

        circle1.dx = finalVx1 * cos - vy1 * sin;
        circle1.dy = vy1 * cos + finalVx1 * sin;
        circle2.dx = finalVx2 * cos - vy2 * sin;
        circle2.dy = vy2 * cos + finalVx2 * sin;

        circle1.x += circle1.dx;
        circle1.y += circle1.dy;
        circle2.x += circle2.dx;
        circle2.y += circle2.dy;
      }
    };

    const update = () => {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        circles.forEach((circle, index) => {
          circle.x += circle.dx;
          circle.y += circle.dy;

          if (
            circle.x + circle.radius > canvas.width ||
            circle.x - circle.radius < 0
          ) {
            circle.dx = -circle.dx;
          }

          if (
            circle.y + circle.radius > canvas.height ||
            circle.y - circle.radius < 0
          ) {
            circle.dy = -circle.dy;
          }

          for (let i = 0; i < circles.length; i++) {
            if (i !== index && detectCollision(circle, circles[i])) {
              resolveCollision(circle, circles[i]);
            }
          }

          // 이미지 그리기
          ctx.drawImage(
            circle.img,
            circle.x - circle.radius,
            circle.y - circle.radius,
            circle.radius * 2,
            circle.radius * 2
          );
        });
      }

      requestAnimationFrame(update);
    };

    // 초기 아이콘 생성
    circles = createCircles();

    update();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="container relative mx-auto rounded-md border border-[#4B4B4B] px-0"
    >
      <canvas
        ref={canvasRef}
        className="relative"
        // style={{ height: 500 }}
      />
    </div>
  );
};

export default CircleAnimation;
