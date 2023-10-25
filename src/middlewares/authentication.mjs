export const authenticateRechargeToken = (req, res, next) => {
  const rechargeToken = req.header('X-Recharge-Access-Token');

  if (!rechargeToken || rechargeToken !== process.env.RECHARGE_API_TOKEN) {
    return res.status(403).json({ message: 'Invalid or missing API token' });
  }

  next();
};
