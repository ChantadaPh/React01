import { Card, Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { NavLink, Routes, Route } from 'react-router-dom';
import { Test1 } from './Test1';
import { Test2 } from './Test2';

export function Home() {
  const { t } = useTranslation();

  let activeClassName = 'nav-active';

  return (
      <div className="App" style={{ display: 'grid' }}>
        <h2></h2>
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
  );
}
