import {
  annotate,
  annotationGroup,
} from "https://unpkg.com/rough-notation?module";
const a1 = annotate(document.querySelector("#link-1"), {
  type: "underline",
  color: "var(--tertiary)",
});
const a2 = annotate(document.querySelector("#link-2"), {
  type: "underline",
  color: "var(--tertiary)",
});
const a3 = annotate(document.querySelector("#link-3"), {
  type: "underline",
  color: "var(--tertiary)",
});
const a4 = annotate(document.querySelector("#link-4"), {
  type: "underline",
  color: "var(--tertiary)",
});
// const a5 = annotate(document.querySelector("#link-5"), {
//   type: "underline",
//   color: "var(--tertiary)",
// });
// const projects = annotate(document.querySelector("#projects"), {
//   type: "bracket",
//   color: "var(--tertiary)",
//   brackets: ["left", "right"],
// });

const ag = annotationGroup([a1, a2, a3, a4]);
ag.show();

// var canvas = document.getElementById("canvas"),
//   context = canvas.getContext("2d"),
//   width = (canvas.width = window.innerWidth),
//   height = (canvas.height = window.innerHeightl);

// var res = 10;
// var count = 1000;

// for (var i = 0; i < count; ++i) {
//   var x = Math.random() * width,
//     y = Math.random() * height;
//   var value = getValue(x, y);

//   context.save();
//   context.translate(x, y);
//   render(value);
//   context.restore();
// }

// function getValue(x, y) {
//   return (x + y) * 0.01 * Math.PI * 2;
// }

// function render(value) {
//   context.rotate(value);
//   context.beginPath();
//   context.moveTo(0, 0);
//   context.lineTo(res, 0);
//   context.stroke();
// }
