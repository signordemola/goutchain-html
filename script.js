let navBtn = document.getElementById('navBtn');
let mobileNav = document.getElementById('mobileNav');

let openHamburger =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAABA0lEQVR4Ae3YwQkCMRCF4cQaPCpsAVqERw+2sSVYhCVYg3ePFqEFCO7RHuKLsDCEOXlz8g8MJm4Q32c8JClRCCCAAAIIIIAAAggggAAC/QnkNnIpZa/3zupV++zP55O+/5hzvtocHsBLC6KFnzNPAljPk/q6sJMexx7AKIi6XaLV9y8QLRR5EEAAAQQQQAABBBBA4DcB7zg86KNO6p16qY5Qb4W4qY86Dj9tIA/grgUbuyjQ+CGArc3jHYft8/BjD+Cg1Bd13TZRqmapmWo2CgEEEEAAAQQQQAABBBBI3nF4kAv3AUE3B/cB7Q/LfUArwhwBBBBAAAEEEEAAAQQQQKADgQ+0pi077kq0gwAAAABJRU5ErkJggg==';
let closeHamburger =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAACGklEQVR4Ae2aW07DMBBFGz7poqgqNgCUh8SKCmwEiQoWxE5oCfdKmaiKHCdu/WYijQxN4plz7CaNlcVCNzWgBtSAGlADakANqAE1oAamDLRtu0RsETvEaur4WPtRyzXiC/GKWAbL2yU4oP1B7BF3wZLN7Bg1PHa1sCbWtp15qvth6JyWmYgbkyWVgPwCz1q4sbadO9nMM9A5pxqhJaFIuJ3ZhbfDUMMQXmpZeUti6siSOJoE1PCASDcQKSUkh5dZkUJCNvApJFjg096JYsyEbOFjzATA3yNMF7y0Iy/w0oaYCcXAh5BQHLxPCcXC+5BQPPw5EqqBP0WCBX4j/RXZAmzsoaV/dqgWXkbMJgH7NgjTfb7skRd4aS0S6oefkDBcW6hr5AVeWsNMwEf96lJ0+AspLGJ7GMnV4vPfkX11fIyRNl3wjr8CXNPr7w51UHcUI/C8AA4vgvVJsMBzRpjW9yjhpooZYIMXwGolzIGvVoILfHUSToGvRsI58EcSTA9Q+V8YfcAXK8EnfHESQsAXIyEkfPYSYsBnKyEmfHYSUsBnIyElfHIJgF8jho+v/D/6Sg5yjv1YuhJR3lskNb0kFR1ewAwS+GvxQ/bPaV2XxL7RKc/ZI7iE9dQ0jVNCnONtQ+53dPaMYC2sibWxxjAb7PJFyTfEJ2IdJot7r6hFXpR8wd+X7j3oGWpADagBNaAG1IAaUANq4N8Z+AObgMELfQ8/GQAAAABJRU5ErkJggg==';

let isMenuOpen = false;

document.addEventListener('DOMContentLoaded', () => {
  navBtn.addEventListener('click', () => {
    if (isMenuOpen) {
      mobileNav.style.height = '0rem';
      navBtn.src = openHamburger;
    } else {
      mobileNav.style.height = '80%';
      navBtn.src = closeHamburger;
    }

    isMenuOpen = !isMenuOpen;
  });
});
