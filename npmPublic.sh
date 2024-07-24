function updateVersionFn {
  version=$(sed -n 's/"version": "\(.*\)",/\1/p' ../package.json | tr -d '[:space:]' | sed 's/\./\\./g')
  if [ "$(uname -s)" = "Darwin" ]; then
    sed -i '' "s/${version}/${1}/" ../package.json
  elif [ "$(uname -s)" = "Windows" ]; then
    sed -i "s/${version}/${1}/" ../package.json
  else
    sed -i "s/${version}/${1}/" ../package.json
  fi
}

echo "输入版本号"
read version_m

updateVersionFn $version_m

npm publish