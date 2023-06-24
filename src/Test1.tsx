import './styles.scss';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Space } from 'antd';

export const Test1 = () => {
  const { t } = useTranslation();

  const shapes = ['square', 'circle', 'oval', 'trapezoid', 'rectangle', 'parallelogram'];
  const [isSwapped, setIsSwapped] = useState(false);
  const [currentShapes, setCurrentShapes] = useState(shapes);

  const handleMoveLeft = () => {
    const shiftedShapes = [...currentShapes.slice(1), currentShapes[0]];
    setCurrentShapes(shiftedShapes);
  };

  const handleMoveRight = () => {
    const shiftedShapes = [currentShapes[currentShapes.length - 1], ...currentShapes.slice(0, currentShapes.length - 1)];
    setCurrentShapes(shiftedShapes);
  };

  const handleChangePosition = () => {
    setIsSwapped(!isSwapped);
    const swappedShapes = [...currentShapes.slice(3), ...currentShapes.slice(0, 3)];
    setCurrentShapes(swappedShapes);
  };

  const handleShapeClick = () => {
    const shuffledShapes = [...currentShapes];
    for (let i = shuffledShapes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledShapes[i], shuffledShapes[j]] = [shuffledShapes[j], shuffledShapes[i]];
    }
    setCurrentShapes(shuffledShapes);
  };

  const handleMainButtonClick = () => {
    window.location.href = '/';
  };

  return (
    <div style={{ display: 'block' }}>
      <h2 style={{ float: 'left', margin: '0px 0px 10px 10px' }}>{t('Layout & Style')}</h2>
      <div style={{ clear: 'both', display: 'grid', margin: "0px 10px 0px 10px" }}>
        <Space className='space' style={{ justifyContent: 'right' }}>
          <Button onClick={handleMainButtonClick}>{t('Main')}</Button>
        </Space>
        <Space className='space' style={{ justifyContent: 'center' }}>
          <Button className='button' onClick={handleMoveLeft}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: "20px 0px 0px 0px" }}>
              <span className="triangle-left"></span>
            </div>
            <span className='moveshape'> {t('Move shape')} </span>
          </Button>
          <Button className='button' >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, margin: "20px 0px 0px 0px" }} onClick={handleChangePosition}>
              <span className="triangle-up"></span>
              <span className="triangle-down"></span>
            </div>
            <span className='moveshape'> {t('Move position')} </span>
          </Button>
          <Button className='button' onClick={handleMoveRight}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: "20px 0px 0px 0px" }}>
              <span className="triangle-right"></span>
            </div>
            <span className='moveshape'> {t('Move shape')} </span>
          </Button>
        </Space>
        <div style={{ display: "grid", justifyContent: 'center' }}>
          <Space className="space" style={{ justifyContent: 'center' }}>
            {!isSwapped ? <div style={{ display: 'flex', width: '200px', height: '100px', marginBottom: '10px' }}></div> : <div></div>}
            {currentShapes.slice(0, 3).map((shape) => (
              <Button key={shape} className="button2" onClick={handleShapeClick}>
                <div className={shape}></div>
              </Button>
            ))}
          </Space>
          <Space className="space" style={{ justifyContent: 'center' }}>
            {!isSwapped ? <div></div> : <div style={{ display: 'flex', width: '200px', height: '100px', marginBottom: '10px' }}></div>}
            {currentShapes.slice(3).map((shape) => (
              <Button key={shape} className="button2" onClick={handleShapeClick}>
                <div className={shape}></div>
              </Button>
            ))}
          </Space>
        </div>
      </div>
    </div>
  )
}