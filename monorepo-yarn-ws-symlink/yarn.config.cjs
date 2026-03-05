module.exports = {
    async constraints({Yarn}) {
      for (const dep of Yarn.dependencies({ ident: 'react' })) {
        dep.update(`18.2.0`);
      }

      for (const dep of Yarn.dependencies({ ident: 'react-native' })) {
        dep.update(`0.72.7`);
      }
    },
  };