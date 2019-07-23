import React from 'react';
import { whileStatement } from '@babel/types';

const Error = ({mensaje}) => (
  <p className="my-3 p-4 text-center text-white alert alert-danger">{mensaje}</p>
);
export default Error;