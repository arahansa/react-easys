import React from 'react';
import {storiesOf} from '@storybook/react';

import {action} from '@storybook/addon-actions';

import Checkbox from "../04/Checkbox";
import Text from '../04/Text';

storiesOf('Checkbox', module)
    .addWithJSX('기본 설정', () => <Checkbox name="agree">dd</Checkbox>)
    .addWithJSX('children 예제', () => <Checkbox name="agree"><Text>동의합니다</Text></Checkbox>)
    .addWithJSX('label 예제', () => <Checkbox name="agree" label="이름"><Text>동의합니다</Text></Checkbox>)
    .addWithJSX('onChange 예제', () => <Checkbox name="agree" onChange={action('onChange 이벤트 발생')}><Text>동의합니다</Text></Checkbox>)
    .addWithJSX('checked 예제', () => <Checkbox name="agree" label="이름" checked><Text>동의합니다</Text></Checkbox>)
    .addWithJSX('errorMessage 예제', () => <Checkbox name="agree" label="이름" errorMessage="동의가 필요합니다"><Text>동의합니다</Text></Checkbox>)
    .addWithJSX('autoFucus 예제', () => <Checkbox name="agree" label="이름" autoFocus><Text>동의합니다</Text></Checkbox>)