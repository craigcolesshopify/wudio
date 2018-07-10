# wudio
## react visual synth
An exercise in creating a react / babel / koa / webpack app from scratch

## Blog
***July 9, 2018***

Added web audio tone generator, thinking I need to abstract the audio engine out of a React component into it's own plain javascript class.  Used render prop to pass down synth engine methods to control components, but also thinking I this will be easier if I use the context API.

***July 7, 2018***

Added simple callback mechanism so that each synth component can control independant values in the **soon to be built** audio engine. This establishes a highly modular approach and separates the look and feel from the actual audio generation.

***July 5, 2018***

Created a knob component that resembles the Roland 909 drum machine knob design. I Was able to get this working with a render prop that sends the state from `<KnobPlate909 />` to a child `<Knob909 />` component and updates the transform style with: `transform:rotate(${rotationDeg * 4}deg)`. The rotationDeg value is based on the mouses Y coord procured from a mouse move event. It was interesting to see how React automatically scopes the mouse move event to each individual `<Knob909 />` component.

***July 4, 2018***

Discovering [styled-components](https://www.styled-components.com/docs/api#primary) ... liking it, but feel it takes me a bit to get my head around it, because it is yet another new way of thinking about components, but it feels like I can get used to it. To learn it I built some basic components for the nav, and made sure I could pass children through etc.

***July 3, 2018***

Finally got the universal routing and rendering part complete after a little bit of "bad error message" stumbling, I realised I was missing the `<StaticRouter>` component on the Koa Server (where the app originally gets served from). Once I added this, it worked. The app in its current state is a super basic universal react app, using Koa.js for the server, with a webpack bundler. I also have a production build step to transpile all the ES6 modules, back to commonjs modules so the server components are all compatible with ES6 modules for development.
