// 'use client';

// import React, { useEffect, useRef, useState } from 'react';

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(true);
//   const [isClicking, setIsClicking] = useState(false);
//   const [isCursorStopped, setIsCursorStopped] = useState(false);

//   const timerRef = useRef<NodeJS.Timeout | null>(null);
//   const lastPositionRef = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const diffX = Math.abs(e.clientX - lastPositionRef.current.x);
//       const diffY = Math.abs(e.clientY - lastPositionRef.current.y);

//       if (diffX > 2 || diffY > 2) {
//         // Throttle state updates using requestAnimationFrame
//         requestAnimationFrame(() => {
//           setPosition({ x: e.clientX, y: e.clientY });
//         });
//         lastPositionRef.current = { x: e.clientX, y: e.clientY };
//         setIsVisible(true);
//         setIsCursorStopped(false);

//         if (timerRef.current) {
//           clearTimeout(timerRef.current);
//         }

//         // Set the cursor stop status after 6 seconds of inactivity
//         timerRef.current = setTimeout(() => {
//           setIsCursorStopped(true);
//         }, 6000);
//       }
//     };

//     const handleMouseOut = () => {
//       setIsVisible(false);
//     };

//     const handleMouseDown = () => {
//       setIsClicking(true);
//     };

//     const handleMouseUp = () => {
//       setIsClicking(false);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseout', handleMouseOut);
//     window.addEventListener('mousedown', handleMouseDown);
//     window.addEventListener('mouseup', handleMouseUp);

//     return () => {
//       if (timerRef.current) {
//         clearTimeout(timerRef.current);
//       }
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseout', handleMouseOut);
//       window.removeEventListener('mousedown', handleMouseDown);
//       window.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, []);

//   return (
//     <div
//       className={`custom-cursor ${isVisible ? '' : 'hidden'} ${isClicking ? 'click' : ''}`}
//       style={{
//         transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
//         willChange: 'transform, box-shadow, background',
//       }}
//     />
//   );
// };

// export default CustomCursor;
