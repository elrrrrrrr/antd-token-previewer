import React from 'react';
import { InputNumber } from '@madccc/antd';

function onChange() {}
export default () => (
  <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
);
