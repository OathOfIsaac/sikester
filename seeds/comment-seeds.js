const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: '  Nunc rhoncus dui vel sem.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Just say anything, George, say what evers natural, the first thing that comes to your mind.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'Busey ipsum dolor sit amet.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'Well, the way they make shows is, they make one show. That shows called a pilot. Then they show that show to the people who make shows, est.',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'Morbi a ipsum.',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'Chew iPad power cord steal the warm chair right after you get up for purr for no reason leave hair everywhere',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'Donec ut mauris eget massa tempor convallis.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
    'Japan air Skate park big ring trucks shuttle stoked rock-ectomy.'
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'Quisque porta volutpat erat.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
    'Schraeder drop gondy, rail fatty slash gear jammer steeps clipless rip bowl couloir bomb hole berm. Huck cruiser crank endo, sucker hole piste ripping ACL huck greasy flow face plant pinner.'
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:
    'Bro ipsum dolor sit amet gaper backside single track, manny Bike epic clipless.'
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'Curabitur convallis.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetudr adipiscing elit.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Nam tristique tortor eu pede.',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'Bro ipsum dolor sit amet gaper backside single track, manny Bike epic clipless.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Sed ante. Vivamus tortor.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Aliquam quis turpis eget elit sodales scelerisque.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Donec quis orci eget orci vehicula condimentum.',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Chase ball of string eat plants, meow, and throw up because I ate plants going to catch the red dot today going to catch the red dot today.',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'Maecenas ut massa quis augue luctus tincidunt.',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'Cras in purus eu magna vulputate luctus.',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'Proin at turpis a pede posuere nonummy.',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: 'A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didnt even know we were calling him Big Bear. We never had the chance to. Maybe it was the eleven months he spent in the womb. The doctor said there were claw marks on the walls of her uterus. Yeah, well, have you seen the new Mustang?',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text:
      'Red leicester parmesan cheese and biscuits cheesy feet blue castello cheesecake fromage frais smelly cheese.',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'Integer ac leo. Pellentesque ultrices mattis odio.',
    user_id: 4,
    post_id: 19
  },
  {
    comment_text: 'Danish fontina cheesy grin airedale danish fontina taleggio the big cheese macaroni cheese port-salut.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: 'Cheese on toast airedale the big cheese.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;