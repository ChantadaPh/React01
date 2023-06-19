import './App.css';
import React from 'react';
import { Dropdown, Menu, Card, Col, Row } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { Test1 } from './Test1';
import { Test2 } from './Test2';

function App() {
  const { t, i18n } = useTranslation();

  let activeClassName = 'nav-active';

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const languageMenu = (
    <Menu>
      <Menu.Item key="en" onClick={() => handleLanguageChange('en')}>
        {t('EN')}
      </Menu.Item>
      <Menu.Item key="th" onClick={() => handleLanguageChange('th')}>
        {t('TH')}
      </Menu.Item>
    </Menu>
  );

  return (
    <BrowserRouter>
      <div className="App" style={{ display: 'grid' }}>
        <div className="language-dropdown" style={{ float: 'right', justifyContent: 'center' }}>
          <Dropdown overlay={languageMenu} placement="bottomRight">
            <SettingOutlined style={{ float: 'right', margin: '10px 10px 0px 0px' }} />
          </Dropdown>
        </div>
        <div className="center-container">
          <Row gutter={10} style={{ justifyContent: 'center' }}>
            <Col span={5}>
              <Card title={t('Test 1')} bordered={false}>
                <nav>
                  <NavLink end to="/Test1" className={({ isActive }) => isActive ? activeClassName : undefined}>
                    {t('Layout & Style')}
                  </NavLink>
                </nav>
              </Card>
            </Col>
            <Col span={5}>
              <Card title={t('Test 2')} bordered={false}>
                <nav>
                  <NavLink end to="/Test2" className={({ isActive }) => isActive ? activeClassName : undefined}>
                    {t('Form & Table')}
                  </NavLink>
                </nav>
              </Card>
            </Col>
          </Row>
          <Routes>
            <Route path="/Test1" element={<Test1 />} />
            <Route path="/Test2" element={<Test2 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
