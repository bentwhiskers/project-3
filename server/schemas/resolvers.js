const { User, Classifieds, Events } = require('../models');
//const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

    //     return userData;
    //   }

    //   throw AuthenticationError;
    // },
    getEvent : async () => {
      const eventData = await Event.findAll({})
      return eventData
    },
    getClassifieds: async () => {
      const classifiedData = await Classifieds.findAll()
    }
  },

  Mutation: {
    // addUser: async (parent, args) => {
    //   const user = await User.create(args);
    //   const token = signToken(user);

    //   return { token, user };
    // },
    // login: async (parent, { email, password }) => {
    //   const user = await User.findOne({ email });

    //   if (!user) {
    //     throw AuthenticationError;
    //   }

    //   const correctPw = await user.isCorrectPassword(password);

    //   if (!correctPw) {
    //     throw AuthenticationError;
    //   }

    //   const token = signToken(user);
    //   return { token, user };
    // },
    addEvent: async (parent, { eventData }, context) => {
      if (context.user) {
        const updatedEvent = await Event.create(
        eventData,
          { new: true }
        );

        return updatedEvent;
      }

      throw AuthenticationError;
    },
    addClassifieds: async (parent, { classifiedData }, context) => {
      if (context.user) {
        const updatedClassified = await Classifieds.create(
        classifiedData,
          { new: true }
        );

        return updatedClassified;
      }

      throw AuthenticationError;
    },
    // removeBook: async (parent, { bookId }, context) => {
    //   if (context.user) {
    //     const updatedUser = await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { savedBooks: { bookId } } },
    //       { new: true }
    //     );

    //     return updatedUser;
    //   }

    //   throw AuthenticationError;
    // },
  },
};

module.exports = resolvers;