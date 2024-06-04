function skillsMember() {
    return {
        "name": "skillsMember",
        "type": "object",
        "properties": {
            "memberId": {
                "type": "string"
            },
            "skills": {
                "type": "array",
                "items": {
                    "$ref": "skill"
                }
            }
        }
    }
}