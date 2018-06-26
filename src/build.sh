#!/bin/bash

set -euo pipefail

function download() {
    if [ ! -e "$(dirname "${2}")" ]
    then
        mkdir -p "$(dirname "${2}")"
    fi

    if [ ! -e "${2}" ]
    then
        curl -L "${1}" -o "${2}.part"
        mv "${2}.part" "${2}"
    fi
}

function extract() {
    if [ ! -e "${2}" ]
    then
        unzip -n "${1}" "${2}"
    fi
}

cd "$(dirname "${BASH_SOURCE[0]}")"

JQUERY_VERSION="${JQUERY_VERSION:-3.3.1}"
JQUERY_JS_URL="${JQUERY_JS_URL:-https://code.jquery.com/jquery-${JQUERY_VERSION}.min.js}"
JQUERY_JS_PATH="${JQUERY_JS_PATH:-js/jquery.min.js}"
download "${JQUERY_JS_URL}" "${JQUERY_JS_PATH}"

BOOTSTRAP_VERSION="${BOOTSTRAP_VERSION:-4.1.1}"
BOOTSTRAP_ZIP_URL="${BOOTSTRAP_JS_URL:-https://github.com/twbs/bootstrap/releases/download/v${BOOTSTRAP_VERSION}/bootstrap-${BOOTSTRAP_VERSION}-dist.zip}"
BOOTSTRAP_CSS_PATH="${BOOTSTRAP_CSS_PATH:-css/bootstrap.min.css}"
BOOTSTRAP_JS_PATH="${BOOTSTRAP_JS_PATH:-js/bootstrap.min.js}"
CUSTOM_CSS_URL="${CUSTOM_CSS_URL:-https://bootswatch.com/4/litera/bootstrap.min.css}"
download "${BOOTSTRAP_ZIP_URL}" bootstrap-dist.zip
[ -z "${CUSTOM_CSS_URL}" ] && extract bootstrap-dist.zip "${BOOTSTRAP_CSS_PATH}"
extract bootstrap-dist.zip "${BOOTSTRAP_JS_PATH}"
[ -n "${CUSTOM_CSS_URL}" ] && download "${CUSTOM_CSS_URL}" "${BOOTSTRAP_CSS_PATH}"

FONTAWESOME_VERSION="${FONTAWESOME_VERSION:-5.1.0}"
FONTAWESOME_ZIP_URL="${FONTAWESOME_ZIP_URL:-https://use.fontawesome.com/releases/v5.1.0/fontawesome-free-${FONTAWESOME_VERSION}-web.zip}"
FONTAWESOME_WEBFONTS_PATH="${FONTAWESOME_WEBFONT_PATH:-fontawesome-free-${FONTAWESOME_VERSION}-web/webfonts}"
download "${FONTAWESOME_ZIP_URL}" fontawesome-free-web.zip
# FIXME extract fontawesome-free-web.zip "."
