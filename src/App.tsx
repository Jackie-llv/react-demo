import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import MyRouter from '@/router';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <MyRouter />
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
