# [vue-star-rating](https://www.npmjs.com/package/vue-star-rating)

[![NPM](https://nodei.co/npm/vue-star-rating.png?downloads=true&stars=true)](https://nodei.co/npm/vue-star-rating/)  

<iframe width="100%" height="300" src="//jsfiddle.net/JacobHsu/2u96tyvj/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## cli

<iframe
     src="https://codesandbox.io/embed/naughty-hertz-71m2n?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue-star-rating"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

```html
<template>
  <div id="app">
    <star-rating
      class="star"
      :increment="0.5"
      text-class="custom-text"
      @rating-selected="setRating"
    ></star-rating>
    <div v-html="rating"></div>
  </div>
</template>
```

```js
import StarRating from "vue-star-rating";
export default {
  name: "app",
  components: {
    HelloWorld,
    StarRating,
  },
  data() {
    return {
      rating: "No Rating Selected",
      currentRating: "No Rating",
      currentSelectedRating: "No Current Rating",
      boundRating: 3,
    };
  },
  methods: {
    setRating: function(rating) {
      this.rating = "You have Selected: " + rating + " stars";
    },
    showCurrentRating: function(rating) {
      this.currentRating =
        rating === 0
          ? this.currentSelectedRating
          : "Click to select " + rating + " stars";
    },
    setCurrentSelectedRating: function(rating) {
      this.currentSelectedRating = "You have Selected: " + rating + " stars";
    },
  },
};
```

```css
<style>
#app {
  ...
}
.star {
  display: flex;
  justify-content: center;
}
.custom-text {
  font-weight: bold;
  font-size: 1.9em;
  border: 1px solid #cfcfcf;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  color: #999;
  background: #fff;
}
</style>
```
