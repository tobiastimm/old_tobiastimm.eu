import React from 'react';
import { injectGlobal } from 'styled-components';
import 'sanitize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

injectGlobal`
   html, body {
    height: 100%;
   }
   body {
    min-height: 100vh;
   }
`;
