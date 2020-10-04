const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Stock = new Schema (
    {
        _id: {
          type: mongoose.ObjectId,
          required: true
        },
        ticker: {
          type: String,
          required: true
        },
        profit_margin: {
          type: Number
        },
        institutional_ownership: {
          type: Number
        },
        eps_growth_past_5_years: {
          type: Number
        },
        total_debt_equity: {
          type: Number
        },
        current_ratio: {
          type: Number
        },
        return_on_assets: {
          type: Number
        },
        sector: {
          type: String
        },
        p_s: {
          type: Number
        },
        change_from_open: {
          type: Number
        },
        performance_ytd: {
          type: Number
        },
        performance_week: {
          type: Number
        },
        quick_ratio: {
          type: Number
        },
        insider_transactions: {
          type: Number
        },
        p_b: {
          type: Number
        },
        eps_growth_quarter_over_quarter: {
          type: Number
        },
        payout_ratio: {
          type: Number
        },
        performance_quarter: {
          type: Number
        },
        forward_p_e: {
          type: Number
        },
        p_e: {
          type: Number
        },
        two_hundred_day_simple_moving_average: {
          type: Number
        },
        shares_outstanding: {
          type: Number
        },
        earnings_date: {
          type: Date
        },
        fifty_two_week_high: {
          type: Number
        },
        p_cash: {
          type: Number
        },
        change: {
          type: Number
        },
        analyst_recom: {
          type: Number
        },
        volatility_week: {
          type: Number
        },
        country: {
          type: String
        },
        return_on_equity: {
          type: Number
        },
        fifty_day_low: {
          type: Number
        },
        price: {
          type: Number
        },
        fifty_day_high: {
          type: Number
        },
        return_on_investment: {
          type: Number
        },
        shares_float: {
          type: Number
        },
        dividend_yield: {
          type: Number
        },
        eps_growth_next_5_years: {
          type: Number
        },
        industry: {
          type: String,
          required: true
        },
        beta: {
          type: Number
        },
        sales_growth_quarter_over_quarter: {
          type: Number
        },
        operating_margin: {
          type: Number
        },
        eps_ttm: {
          type: Number
        },
        peg: {
          type: Number
        },
        float_short: {
          type: Number
        },
        fifty_two_week_low: {
          type: Number
        },
        average_true_range: {
          type: Number
        },
        eps_growth_next_year: {
          type: Number
        },
        sales_growth_past_5_years: {
          type: Number
        },
        company: {
          type: String,
          required: true
        },
        gap: {
          type: Number
        },
        relative_volume: {
          type: Number
        },
        volatility_month: {
          type: Number
        },
        market_cap: {
          type: Number
        },
        volume: {
          type: Number
        },
        gross_margin: {
          type: Number
        },
        short_ratio: {
          type: Number
        },
        performance_half_year: {
          type: Number
        },
        relative_strength_index_14: {
          type: Number
        },
        insider_ownership: {
          type: Number
        },
        twenty_day_simple_moving_average: {
          type: Number
        },
        performance_month: {
          type: Number
        },
        p_free_cash_flow: {
          type: Number
        },
        institutional_transactions: {
          type: Number
        },
        performance_year: {
          type: Number
        },
        lt_debt_equity: {
          type: Number
        },
        average_volume: {
          type: Number
        },
        eps_growth_this_year: {
          type: Number
        },
        fifty_day_simple_moving_average: {
          type: Number
        }
      },
      {timestamps: true}
)

module.exports = mongoose.model('Stock', Stock)