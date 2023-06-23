import './styles.scss';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; import { Button, Space, Card } from 'antd';

export const Test1 = () => {
  const { t } = useTranslation();

  const [isSwapped, setIsSwapped] = useState(false);

  const handleMoveLeft = () => {
    console.log("Move left")
  };

  const handleMoveRight = () => {
    console.log("Move right")
  };

  const handleChangePosition = () => {
    setIsSwapped(!isSwapped);
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
        {isSwapped ? (
          <div style={{ display: "grid", justifyContent: 'center' }}>
            <Space className='space' style={{ justifyContent: 'center' }}>
              <Card className='card'><div className="trapezoid"></div></Card>
              <Card className='card'><div className="rectangle"></div></Card>
              <Card className='card'><div className="parallelogram"></div></Card>
            </Space>

            <Space className='space' style={{ justifyContent: 'center' }}>
              <div style={{ display: 'flex', width: "200px", height: "100px", marginBottom: "10px" }}></div>
              <Card className='card'><div className="square"></div></Card>
              <Card className='card'><div className="circle"></div></Card>
              <Card className='card'><div className="oval"></div></Card>
            </Space>
          </div>
        ) : (
          <div style={{ display: "grid", justifyContent: 'center' }}>
            <Space className='space' style={{ justifyContent: 'center' }}>
              <div style={{ display: 'flex', width: "200px", height: "100px", marginBottom: "10px" }}></div>
              <Card className='card'><div className="square"></div></Card>
              <Card className='card'><div className="circle"></div></Card>
              <Card className='card'><div className="oval"></div></Card>
            </Space>
            <Space className='space' style={{ justifyContent: 'center' }}>
              <Card className='card'><div className="trapezoid"></div></Card>
              <Card className='card'><div className="rectangle"></div></Card>
              <Card className='card'><div className="parallelogram"></div></Card>
            </Space>
          </div>
        )}
      </div>
    </div>
  )
}