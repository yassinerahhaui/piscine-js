const currify = func => (...args) => args.length >= func.length ? func(...args) : (...more) => currify(func)(...args, ...more)
