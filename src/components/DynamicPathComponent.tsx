/**
 ***************************************************************************
 * @author junghwan.an
 * @version 0.1
 * @since 2023.08.14
 * @description: DynamicPathComponent 컴포넌트
 *               DB에서 가져온 menuUrl과 pages 하위에 컴포넌트 경로를 맞춰
 *               컴포넌트를 동적으로 가져온다. (페이지가 많아지면 하드코딩에 한계가 있다.)
 ***************************************************************************
 * */
import { lazy, Suspense } from 'react';
import { Spin } from 'antd';

const componentPages: any = import.meta.glob('../pages/**/**/**.tsx');

function DynamicPathComponent(props: any): React.ReactElement {
  const { componentPath } = props;
  const LazyComponent = lazy(
    typeof componentPages[componentPath] === 'function' ? componentPages[componentPath] : () => {}
  );
  return (
    <Suspense fallback={<Spin tip="Loading" size="large" />}>
      <LazyComponent />
    </Suspense>
  );
}

export default DynamicPathComponent;
