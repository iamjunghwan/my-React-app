import { Button } from 'antd';
import ChildrenComponent from '@/pages/education1/ChildrenComponent';
import AuthPage from '@/pages/auth/AuthPage.tsx';

// 에듀케이션 테스트
const Education = (): React.ReactElement => {
  const [cnt, setCnt] = useState<number>(0);

  const fncPlusClick01 = () => {
    setCnt(cnt + 1);
  };

  return <AuthPage />;
};

export default Education;
