import { useRef , useEffect } from "react";

const BeerCanvas = () => {
  class Particle {
   constructor(canvasWidth, canvasHeight) {
       this.x = Math.random() * canvasWidth;
       this.y = canvasHeight + Math.random() * 300;
       this.speed = 1 + Math.random();
       this.radius = Math.random() * 3;
       this.opacity = (Math.random() * 100) / 1000;
     }
  }
 const canvasRef = useRef(null);
 const ctxRef = useRef(null);
 const particles = [];

 useEffect(() => {
   const canvas = canvasRef.current;
   const ctx = canvas.getContext('2d');
   ctxRef.current = ctx;

   const particleCount = 280;

   for (let i = 0; i < particleCount; i++) {
     particles.push(new Particle(canvas.width, canvas.height));
   }

   const loop = () => {
     requestAnimationFrame(loop);
     draw();
   };

   const draw = () => {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     ctx.globalCompositeOperation = 'lighter';

     for (let i = 0; i < particles.length; i++) {
       const p = particles[i];
       ctx.beginPath();
       ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
       ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
       ctx.fill();
       p.y -= p.speed;

       if (p.y <= -10) particles[i] = new Particle(canvas.width, canvas.height);
     }
   };

   loop();
 }, [particles]);

 return <canvas id="beerCanvas" ref={canvasRef} className="max-w-6xl h-full  absolute   z-50" />;
};

export default BeerCanvas;