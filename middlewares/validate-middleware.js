const validate = (Schema) => async (req, res, next) => {
  try {
    const parseBody = await Schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    res.status(404).json({ msg: err.issues[0].message });
  }
};

module.exports = validate;
