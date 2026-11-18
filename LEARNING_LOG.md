# Learning Log

## Session 3: Lesson 1.3 - Debugging & AI Workflows

- **What I built:** Set up debugging workflows with JavaScript and practiced fixing off-by-one errors and edge cases like empty arrays.
- **What confused me:** Git merge conflict resolution tripped me up temporarily, but learning how to park it and push forward kept momentum alive.
- **What I'll do next:** Begin Section 2 (HTML & CSS Essentials) and apply consistent semantic patterns.

## Session 4: Sections 2.1 & 2.2 - Semantic CV & CSS Styling Essentials

- **What I built:** Created a fully semantic HTML CV (`cv.html`) featuring a structured layout, accessible forms, and built a custom dark-theme stylesheet (`style.css`) using CSS variables, custom typography scales, and advanced modern CSS nesting for form controls.
- **What confused me:** Designing from scratch and how to start a newly formed empty CSS file.
- **What I'll do next:** Finalize any remaining micro-adjustments, commit the final CSS polish, and transition into advanced layout or upcoming sections.

## Session 5: Lesson 2.3 - CSS Layouts (Flexbox & Grid)

- **What I built:** Developed a responsive product catalogue using CSS Grid (`auto-fit`, `minmax()`), clean Flexbox navigation, and mobile media queries.
- **What confused me:** Managing card internal structures and making sure responsive breakpoints transitioned smoothly on smaller screens.
- **What I'll do next:** Continue applying layout engines and advanced styling to upcoming projects.

## Session 6: Lesson 3.1 - JavaScript Fundamentals (Variables, Operators and Datatypes)

- **What I built:** Created a Smart Bill Splitter with percentage taxes and currency formating.
- **What confused me:** Converting Money to Rupees from Paisa and how to handle floating values.
- **What I'll do next:** Continue Learning JavaScript.

# Prediction Exercise:-

- console.log(0.1 + 0.2); //0.29999...
- console.log('5' + 5); //55
- console.log('5' - 5); //0
- console.log(true + 1); //2
- console.log([] + []); //0  
  (Wrong, it should be an empty string - Because if both are strings, then concatenation will take priority.)

- console.log(typeof null); //object
- console.log(NaN === NaN); //false
- console.log('b' + 'a' + +'a' + 'a'); //error
  (Wrong, Because +'a' will coerce via uniry plus operator to number and evaluate to NaN, And afterwards, NaN would act as string, so the result will be 'ba NaN a')

- console.log(null ?? 'default', 0 ?? 'default', 0 || 'default'); //default 0 default
- console.log(10 > 9 > 0); //true
