class CreateGroupUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :group_users do |t|
      t.references :group, forgeign_key: true
      t.references :user, forgeign_key: true
      t.timestamps
    end
  end
end
