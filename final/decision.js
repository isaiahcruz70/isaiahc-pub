export const evaluateMealDecision = (inputs) => {
    const { mealBudget, timeAvailable, needQuick, wantHealthy, mealPreference } = inputs;

    // Basic example logic (you can change wording, but keep returning { decision: "..." })
    if (wantHealthy && needQuick && timeAvailable <= 15) {
        return { decision: "Healthy quick option: yogurt, fruit, or a protein wrap" };
    }

    if (wantHealthy && mealBudget <= 10) {
        return { decision: "Healthy budget option: cook something simple at home" };
    }

    if (wantHealthy && mealPreference === "takeout") {
        return { decision: "Healthy takeout: salad, rice bowl, or grilled chicken" };
    }

    if (wantHealthy && mealPreference === "home") {
        return { decision: "Healthy home meal: protein + veggies + water" };
    }

    if (wantHealthy) {
        return { decision: "Healthy: protein + veggies + water" };
    }

    if (needQuick && timeAvailable <= 15) {
        return { decision: "Quick snack / simple sandwich at home" };
    }

    if (mealBudget <= 10) {
        return { decision: "Cheap option: make something at home" };
    }

    if (mealPreference === "takeout") {
        return { decision: "Takeout: grab something nearby" };
    }

    if (mealPreference === "healthy") {
        return { decision: "Healthy: protein + veggies + water" };
    }

    if (mealPreference === "home") {
        return { decision: "Eat at home: cook something simple" };
    }

    return { decision: "Balanced choice: quick home meal or affordable takeout" };
};