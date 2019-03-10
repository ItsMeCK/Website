set :stage, :production
server '88.99.140.158', user: 'deploy', roles: [:web, :app], primary: true

# Don't change these unless you know what you're doing
set :pty,             true
set :use_sudo,        false
set :stage,           :production
set :deploy_via,      :remote_cache
set :deploy_to,       "/home/#{fetch(:user)}/web_ver1/production/#{fetch(:application)}"

set :branch, :master
set :keep_releases, 5

## Defaults:
# set :scm,           :git
# set :format,        :pretty
set :log_level,     :debug

# ## Linked Files & Directories (Default None):
# set :linked_files, %w{config/database.yml config/secrets.yml}
# set :linked_dirs,  %w{log tmp/pids tmp/cache tmp/sockets vendor/bundle public/assets public/uploads}
set :bundle_binstubs, nil
set :tmp_dir, '/home/deploy/tmp'

 

  # desc 'Seed Database'
  # task :seed do
  #   on roles(:app) do
  #     within "#{current_path}" do
  #       with rails_env: "#{fetch(:stage)}" do
  #         execute :rake, "db:seed"
  #       end
  #     end
  #   end
  # end

  


 
 
  #after  :finishing,    :pm_restart 
  #after  :finishing,    :pm_restart