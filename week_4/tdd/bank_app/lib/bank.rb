class Bank

  attr_accessor :name, :accounts

  def initialize name
   @name = name
   @accounts = {}
  end

  def create_account(name, deposit)
    accounts[name] = deposit
  end

  def deposit(account, amount)
    accounts[account] += amount
  end

  def balance account
    accounts[account]
  end

  def withdraw(account, amount)
    accounts[account] -= amount
  end

end