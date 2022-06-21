/*
 * @Author: luzc
 * @Date: 2022-04-03 17:07:46
 * @LastEditors: luzc
 * @LastEditTime: 2022-04-03 17:53:17
 * @Description: xx
 */
import type { FC } from 'react';
import './index.less';

export type FooProps = {
  name: string
}

const Foo: FC<FooProps> = ({
  name
}) => {
  console.log('Foo');
  return (
    <div className="foo-box">
      {name}
    </div>
  );
};

export default Foo;

