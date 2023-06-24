.PHONY: serve build

default: serve

# Note: you may need to pick a compatible version of Ruby, e.g. $ rvm use ruby-2.7.4

serve:
	@echo "We assume that Ruby 2.7 and its bundler are already installed"
	bundle install
	bundle exec jekyll serve

build:
	@echo "We assume that Ruby 2.7 and its bundler are already installed"
	bundle install
	rm -rf _site/
	bundle exec jekyll build
