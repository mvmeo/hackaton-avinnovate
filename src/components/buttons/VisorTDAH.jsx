import { useState, useEffect } from 'react';
import useTADH from '../hooks/useTDAH';

// eslint-disable-next-line react/prop-types
export const VisorTDAH = ({ children }) => {
    const { tdah } = useTADH();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const mouseMove = (e) => {
        setMousePosition({ y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    const containerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
    };

    const bot = {
        ...containerStyle,
        background: 'rgba(0,0,0,0.65)',
        inset: 'auto 0 0',
        position: 'fixed',
        pointerEvents: 'none',
        height: `calc(100vh - ${mousePosition.y + 100}px)`,
    };

    const top = {
        ...containerStyle,
        background: 'rgba(0,0,0,0.65)',
        inset: '0 0 auto',
        position: 'fixed',
        pointerEvents: 'none',
        height: `${mousePosition.y - 100}px`,
    };

    return (
        <>
            <div id="contenido" className='relative'>
            </div>
            {tdah && (
                <>
                <div style={top}>
                <div style={bot}></div></div>
                </>
            )
            }
        </>
    );
};
