#!/bin/bash

set -euo pipefail

function info() {
    local GREEN='\033[1;32m'
    local NC='\033[0m'
    echo -e "${GREEN}[INFO]${NC}" "${@}" >&2
}

function download() {
    if [ ! -e "${2}" ]
    then
        info "${2}: Downloading..."
        mkdir -p "$(dirname "${2}")"
        curl -L "${1}" -o "${2}.part"
        mv "${2}.part" "${2}"
        info "${2}: Downloaded"
    fi
}

function extract() {
    if [ ! -e "${2}" ]
    then
        info "${2}: Extracting..."
        mkdir -p "${2}"
        unzip -qn "${1}" -d "${2}"
        info "${2}: Extracted"
    fi
}

function copy() {
    if [ ! -e "${2}" ]
    then
        info "${2}: Copying..."
        mkdir -p "$(dirname "${2}")"
        cp -r "${1}" "${2}"
        info "${2}: Copied"
    fi
}

cd "$(dirname "${BASH_SOURCE[0]}")"

copy src/static out/static
copy src/templates out/templates

JQUERY_VERSION="${JQUERY_VERSION:-3.3.1}"
JQUERY_JS_URL="${JQUERY_JS_URL:-https://code.jquery.com/jquery-${JQUERY_VERSION}.min.js}"
download "${JQUERY_JS_URL}" out/static/js/jquery.min.js

JQUERY_UI_VERSION="${JQUERY_UI_VERSION:-1.12.1}"
JQUERY_UI_ZIP_URL="${JQUERY_UI_ZIP_URL:-https://jqueryui.com/resources/download/jquery-ui-1.12.1.zip}"
JQUERY_UI_ZIP="out/$(basename "${JQUERY_UI_ZIP_URL}")"
JQUERY_UI_DIR="${JQUERY_UI_ZIP%.zip}"
download "${JQUERY_UI_ZIP_URL}" "${JQUERY_UI_ZIP}"
extract "${JQUERY_UI_ZIP}" "${JQUERY_UI_DIR}"
copy "${JQUERY_UI_DIR}/jquery-ui-${JQUERY_UI_VERSION}/jquery-ui.min.css" out/static/css/jquery-ui.min.css
copy "${JQUERY_UI_DIR}/jquery-ui-${JQUERY_UI_VERSION}/jquery-ui.min.js" out/static/js/jquery-ui.min.js

BOOTSTRAP_VERSION="${BOOTSTRAP_VERSION:-4.1.1}"
BOOTSTRAP_ZIP_URL="${BOOTSTRAP_JS_URL:-https://github.com/twbs/bootstrap/releases/download/v${BOOTSTRAP_VERSION}/bootstrap-${BOOTSTRAP_VERSION}-dist.zip}"
BOOTSTRAP_ZIP="out/$(basename "${BOOTSTRAP_ZIP_URL}")"
BOOTSTRAP_DIR="${BOOTSTRAP_ZIP%.zip}"
download "${BOOTSTRAP_ZIP_URL}" "${BOOTSTRAP_ZIP}"
extract "${BOOTSTRAP_ZIP}" "${BOOTSTRAP_DIR}"
copy "${BOOTSTRAP_DIR}/css/bootstrap.min.css" out/static/css/bootstrap.min.css
copy "${BOOTSTRAP_DIR}/js/bootstrap.min.js" out/static/js/bootstrap.min.js

FONTAWESOME_VERSION="${FONTAWESOME_VERSION:-5.1.0}"
FONTAWESOME_ZIP_URL="${FONTAWESOME_ZIP_URL:-https://use.fontawesome.com/releases/v5.1.0/fontawesome-free-${FONTAWESOME_VERSION}-web.zip}"
FONTAWESOME_ZIP="out/$(basename "${FONTAWESOME_ZIP_URL}")"
FONTAWESOME_DIR="${FONTAWESOME_ZIP%.zip}"
download "${FONTAWESOME_ZIP_URL}" "${FONTAWESOME_ZIP}"
extract "${FONTAWESOME_ZIP}" "${FONTAWESOME_DIR}"
copy ${FONTAWESOME_DIR}/fontawesome-free-${FONTAWESOME_VERSION}-web/css/fontawesome.css out/static/css/fontawesome.css
copy ${FONTAWESOME_DIR}/fontawesome-free-${FONTAWESOME_VERSION}-web/css/solid.css out/static/css/solid.css
copy ${FONTAWESOME_DIR}/fontawesome-free-${FONTAWESOME_VERSION}-web/webfonts out/static/webfonts

info "Done"
