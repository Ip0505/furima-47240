class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  with_options presence: true do
    validates :nickname
    validates :last_name
    validates :first_name
    validates :last_name_kana
    validates :first_name_kana
    validates :birth_date
  end

  validates :password, format: {
    with: /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]+\z/i,
    message: 'は半角英数字混合で入力してください'
  }

  validates :last_name, :first_name, format: {
    with: /\A[ぁ-んァ-ヶ一-龥々ー]+\z/,
    message: 'は全角で入力してください'
  }

  validates :last_name_kana, :first_name_kana, format: {
    with: /\A[ァ-ヶー－]+\z/,
    message: 'は全角カタカナで入力してください'
  }
end
