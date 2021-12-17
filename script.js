import { annotate, annotationGroup } from 'https://unpkg.com/rough-notation?module';
const a1 = annotate(document.querySelector('#link-1'), { type: 'underline', color: "var(--tertiary)" });
const a2 = annotate(document.querySelector('#link-2'), { type: 'underline', color: "var(--tertiary)" });
const a3 = annotate(document.querySelector('#link-3'), { type: 'underline', color: "var(--tertiary)" });
const a4 = annotate(document.querySelector('#link-4'), { type: 'underline', color: "var(--tertiary)" });
const a5 = annotate(document.querySelector('#link-5'), { type: 'underline', color: "var(--tertiary)" });
const projects = annotate(document.querySelector('#projects'), { type: 'bracket', color: "var(--tertiary)", brackets: ['left', 'right'] });

const ag = annotationGroup([a1, a2, a3, a4, a5, projects]);
ag.show();
