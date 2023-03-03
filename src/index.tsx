import React from 'react';
import { LogBox } from "react-native";
import { Router } from './routes';

LogBox.ignoreAllLogs();

export default () => <Router />;
