class CommentsController < ApplicationController
  before_action :set_group

  def inedx
    @comment = Comment.new
    @comments = @group.comments.includes(:user)
  end

  def create
    @comment = @group.comments.new(comments_params)
    if @comment.save
      redirect_to group_comments_path(@group), notice: "コメントが送信されました"
    else
      @comments = @group.comments.includes(:user)
      flash.now[:alert] = "コメントを入力してください"
      render :index
    end
  end

  private
    def comments_params
      params.require(:comment).permit(:comment, :image).merge(user_id: current_user.id)
    end

    def set_group
      @group = Group.find(params[:group_id])
    end
end
