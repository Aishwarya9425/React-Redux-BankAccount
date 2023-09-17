import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "INR",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

//receive state obj from store
function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

//before react hooks - before useSelector and useDispatch
//Connect API- takes a func mapStateToProps to return a new func
export default connect(mapStateToProps)(BalanceDisplay);
