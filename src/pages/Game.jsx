import React, { useRef, useEffect, useState } from "react";

const boxSize = 20;
const canvasSize = 400;

const getInitialSnake = () => [
  { x: 5 * boxSize, y: 10 * boxSize },
  { x: 4 * boxSize, y: 10 * boxSize },
  { x: 3 * boxSize, y: 10 * boxSize },
];

const getRandomFood = (snake) => {
  const maxPos = canvasSize / boxSize;
  let food;
  do {
    food = {
      x: Math.floor(Math.random() * maxPos) * boxSize,
      y: Math.floor(Math.random() * maxPos) * boxSize,
    };
  } while (snake.some(segment => segment.x === food.x && segment.y === food.y));
  return food;
};

const Game = () => {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState(getInitialSnake());
  const [food, setFood] = useState(getRandomFood(getInitialSnake()));
  const [direction, setDirection] = useState('right');
  const [nextDirection, setNextDirection] = useState('right');
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('start');
  const gameLoop = useRef(null);

  useEffect(() => {
    if (gameState === 'playing') {
      gameLoop.current = setInterval(() => {
        setDirection(prev => nextDirection);
        setSnake(prevSnake => {
          const head = { ...prevSnake[0] };
          switch (nextDirection) {
            case 'up': head.y -= boxSize; break;
            case 'down': head.y += boxSize; break;
            case 'left': head.x -= boxSize; break;
            case 'right': head.x += boxSize; break;
          }
          // Collision
          if (
            head.x < 0 || head.x >= canvasSize ||
            head.y < 0 || head.y >= canvasSize ||
            prevSnake.some(seg => seg.x === head.x && seg.y === head.y)
          ) {
            setGameState('gameover');
            return prevSnake;
          }
          const newSnake = [head, ...prevSnake];
          if (head.x === food.x && head.y === food.y) {
            setScore(s => s + 1);
            setFood(getRandomFood(newSnake));
          } else {
            newSnake.pop();
          }
          return newSnake;
        });
      }, 100);
      return () => { if (gameLoop.current) clearInterval(gameLoop.current); };
    }
  }, [gameState, nextDirection, food]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameState === 'start' || gameState === 'gameover') {
        if (e.key === ' ' || e.key === 'Enter') startGame();
      }
      switch (e.key.toLowerCase()) {
        case 'w': if (direction !== 'down') setNextDirection('up'); break;
        case 's': if (direction !== 'up') setNextDirection('down'); break;
        case 'a': if (direction !== 'right') setNextDirection('left'); break;
        case 'd': if (direction !== 'left') setNextDirection('right'); break;
        default: break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction, gameState]);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    // Draw snake
    for (let segment of snake) {
      ctx.fillStyle = '#4CAF50';
      ctx.fillRect(segment.x, segment.y, boxSize, boxSize);
      ctx.strokeStyle = '#fff';
      ctx.strokeRect(segment.x, segment.y, boxSize, boxSize);
    }
    // Draw food
    ctx.fillStyle = '#f44336';
    ctx.fillRect(food.x, food.y, boxSize, boxSize);
  }, [snake, food]);

  const startGame = () => {
    setSnake(getInitialSnake());
    setFood(getRandomFood(getInitialSnake()));
    setScore(0);
    setDirection('right');
    setNextDirection('right');
    setGameState('playing');
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#18181b",
      color: "#fff",
      textAlign: "center",
      position: 'relative',
      paddingBottom: '3rem',
    }}>
      <div style={{
        position: 'relative',
        width: canvasSize,
        height: canvasSize,
      }}>
        <canvas
          ref={canvasRef}
          width={canvasSize}
          height={canvasSize}
          style={{ border: '2px solid #333', background: '#fff' }}
        />
        <div style={{ position: 'absolute', top: 10, left: 10, fontSize: 20, color: '#333', zIndex: 2 }}>
          Score: {score}
        </div>
        {gameState === 'start' && (
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            background: 'rgba(0,0,0,0.7)', color: 'white', zIndex: 3
          }}>
            <h1>Snake Game</h1>
            <p>Use <b>WASD</b> to move</p>
            <button onClick={startGame} style={{ padding: '10px 20px', fontSize: 16, background: '#4CAF50', color: '#fff', border: 'none', borderRadius: 5, cursor: 'pointer', marginTop: 20 }}>Start Game</button>
          </div>
        )}
        {gameState === 'gameover' && (
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            background: 'rgba(0,0,0,0.7)', color: 'white', zIndex: 3
          }}>
            <h1>Game Over!</h1>
            <p>Score: {score}</p>
            <button onClick={startGame} style={{ padding: '10px 20px', fontSize: 16, background: '#4CAF50', color: '#fff', border: 'none', borderRadius: 5, cursor: 'pointer', marginTop: 20 }}>Play Again</button>
          </div>
        )}
      </div>
      <div style={{
        position: 'absolute',
        bottom: '1.2rem',
        left: 0,
        width: '100%',
        textAlign: 'center',
        color: '#a3a3a3',
        fontSize: '1rem',
        letterSpacing: '0.03em',
      }}>
      </div>
    </div>
  );
};

export default Game;
