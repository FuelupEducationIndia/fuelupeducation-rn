import { height, width } from '../constants'

const cardVariants = {
  defaults: {
    padding: {
      phone: 'm',
      tablet: 's',
    },
  },
  elevated: {
    borderRadius: 'xxl',
    shadowColor: 'text',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 15,
    elevation: 5,
  },
  top: {
    height: height / 3.1,
    backgroundColor: 'primary',
    color: 'white',
    borderBottomLeftRadius: 'xl',
    borderBottomRightRadius: 'xl',
  },
  form: {
    height: height - 100,
    width: width - 50,
    backgroundColor: 'background',
    borderRadius: 's',
    shadowColor: 'text',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    elevation: 5,
  },
}

export default cardVariants
