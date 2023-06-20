import { Routes, Route } from 'react-router-dom';
import { Dropdown, Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Home } from './Home';
import { Test1 } from './Test1';
import { Test2 } from './Test2';

function App() {
  const { t, i18n } = useTranslation();

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
    <div className="App">
      <div className="language-dropdown" style={{ float: 'right', justifyContent: 'center'}}>
        <Dropdown overlay={languageMenu} placement="bottomRight">
          <SettingOutlined style={{ float: 'right', margin: '10px 10px 0px 0px' }} />
        </Dropdown>
      </div>
      <div className='Route'>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path="/test1" element={<Test1 />} />
          <Route path="/test2" element={<Test2 />} />
        </Routes>
      </div>
    </div>
  )
}

export default App