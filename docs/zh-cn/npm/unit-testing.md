# unit-testing

## flush-promises

[![NPM](https://nodei.co/npm/flush-promises.png?downloads=true&stars=true)](https://nodei.co/npm/flush-promises/)

```js
const flushPromises = require('flush-promises');
 
test('flushPromises', async () => {
  let a;
  let b;
 
  Promise.resolve().then(() => {
    a = 1;
  }).then(() => {
    b = 2;
  })
 
  await flushPromises();
 
  expect(a).toBe(1);
  expect(b).toBe(2);
});
```

### unit-testing/[testing-api-calls](https://www.vuemastery.com/courses/unit-testing/testing-api-calls)

tests\unit\MessageDisplay.spec.js

```js
import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios') // path of module to mock

describe('MessageDisplay', () => {

  // in our first test, getMessage was called, and then it gets called again in our second test. We haven’t done anything to clear out our mocked
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Calls getMessage once and displays message', async () => {
    const mockMessage = 'Hello from the db' 
    // mock the API call
    getMessage.mockResolvedValueOnce({ text: mockMessage }) 
    const wrapper = mount(MessageDisplay)

    await flushPromises() // resolves promises
    // ensures that a mock function is called an exact number of times
    expect(getMessage).toHaveBeenCalledTimes(1)

    // components\MessageDisplay.vue template
    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual(mockMessage)
  })  
})
```

components\MessageDisplay.vue

```js
<template>
  <p v-if="error" data-testid="message-error">{{ error }}</p>
  <p v-else data-testid="message">{{ message.text }}</p>
</template>
```
