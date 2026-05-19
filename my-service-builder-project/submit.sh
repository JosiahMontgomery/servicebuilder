#!/bin/bash
echo "Testing findByName..."
curl -u test@liferay.com:test "http://localhost:8080/api/jsonws/h7g5.h7g5entry/get-entries?name=FinalVerification"

echo "Testing DynamicQuery..."
curl -u test@liferay.com:test \
     -H "Content-Type: application/json" \
     -X POST \
     -d '{"name":"FinalVerification"}' \
     "http://localhost:8080/api/jsonws/h7g5.h7g5entry/get-entries-by-dynamic-query"