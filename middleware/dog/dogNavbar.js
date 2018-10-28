/**
 * Gets the dog for the dog id
 *  - if there is no such dog, redirect to /dogs
 *  - if there is one, put it on res.
 */
module.exports = function (req, res, next) {
  res.tpl = { 
    nav: {
      items: [
        {
          text: 'Kutyák',
          isActive: true,
          href: '/dog/list'
        },
        {
          text: 'Menhelyek',
          isActive: false,
          href: '/pound/list'
        }
      ]
    },
    ...res.tpl
  };
  return next();
};