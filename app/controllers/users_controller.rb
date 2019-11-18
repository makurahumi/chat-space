class UsersController < ApplicationController

  def index
    @omit_id = params[:omit_user] || current_user.id
      if @omit_id.present?
        @omit_id << current_user.id
      end

    return nil if params[:keyword] == ""
    @users = User.where(['name LIKE ?', "%#{params[:keyword]}%"] ).where.not(id: @omit_id).limit(10)
    respond_to do |format|
      format.html
      format.json
    end
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end