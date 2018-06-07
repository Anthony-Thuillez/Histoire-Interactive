var data = {
  answer: ['oui', 'non'],
  questions: [{
    question: 'Êtes-vous en couples ?',
    yes: 1, //Votre conjoint veut-il un enfant ?
    no: 3 //Aimez-vous les enfants ? 2
  }, {
    question: 'Votre conjoint veut-il un enfant ?',
    yes: 1, //Aimez-vous les enfants ? 1
    no: 3 //Aimez-vous les enfants ? 3
  }, {
    question: 'Aimez-vous les enfants ?', // before -> oui x2
    yes: 10, //Faites un enfant.
    no: 3 //Pensez-vous que nous devenons de plus en plus stupides ?
  }, {
    question: 'Aimez-vous les enfants ?', // before -> non
    yes: 7, //Sommes-nous trop nombreux sur Terre ?
    no: 2 //Pensez-vous que nous devenons de plus en plus stupides ?
  }, {
    question: 'Aimez-vous les enfants ?', // before -> oui non
    yes: 11, //Discuté(e) avec votre conjoint.
    no: 9 //Ne faites pas d'enfant.
  }, {
    question: 'Pensez-vous que nous devenons de plus en plus stupides ?',
    yes: 1,
    no: 2
  }, {
    question: 'Les jeunes d\'aujourd\'hui manquent-ils de respect ?',
    yes: 1,
    no: 2
  }, {
    question: 'Êtes-vous de la génération 2000 ou plus ?',
    yes: 1,
    no: 2
  }, {
    question: 'Regardez-vous des émissions de Télé-réalité ?',
    yes: 1,
    no: 2
  }, {
    question: 'Utilisez-vous des filtres Snapchat ?',
    yes: 1,
    no: 2
  }, {
    question: 'Sommes-nous trop nombreux sur Terre ?',
    yes: 4, //Adoptez un enfant.
    no: 2
  }, {
    question: 'Pensez-vous que cela va s\'améliorer dans le futur ?',
    yes: 1,
    no: 2
  }, {
    question: 'Faites un enfant.',
    end: true
  }, {
    question: 'Ne faites pas d\'enfant.',
    end: true
  }, {
    question: 'Adoptez un enfant.',
    end: true
  }, {
    question: 'Discuté(e) avec votre conjoint.',
    end: true
  }]
};