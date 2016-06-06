#!/usr/bin/env bash
# Copyright (c) 2012-2016 Peter Morgan <peter.james.morgan@gmail.com>
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
    git config --global user.email "noreply@travis-ci.org"
    git config --global user.name "Travis CI"

    git clone --single-branch . tmp/ghp
    pushd tmp/ghp
    git checkout --orphan gh-pages
    git remote set-url origin https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git
    git rm -rf -q .
    cp -r ${TRAVIS_BUILD_DIR}/build/bundled/ .
    git add -A .
    git commit -am "build ${TRAVIS_BUILD_NUMBER} for ${TRAVIS_COMMIT}"
    git push --force -u origin gh-pages &> /dev/null
    popd
fi
    

    
